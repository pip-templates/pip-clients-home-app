#!/usr/bin/env pwsh

Set-StrictMode -Version latest
$ErrorActionPreference = "Stop"

# get component data and set necessary variables
$component = Get-Content -Path "component.json" | ConvertFrom-Json
$rcImage="$($component.registry)/$($component.name):$($component.version)-$($component.build)-rc"

# Check for dist folder
if (!(Test-Path -Path "./dist")) {
    Write-host "Application not builded. dist filder missing. Run build.ps1 to build application."
    exit 1
}

# Build docker image
docker build --build-arg app_name="$($component.name)" `
    --build-arg short_name="$($component.short_name)" `
    -f docker/Dockerfile -t $rcImage .

# Check for successfull build
if ($LastExitCode -ne 0 ) {
    Write-Host "Error occured during rc image build."
    exit 1
}
