#!/usr/bin/env pwsh

Set-StrictMode -Version latest
$ErrorActionPreference = "Stop"

# get component data and set necessary variables
$component = Get-Content -Path "component.json" | ConvertFrom-Json
$rcImage="$($component.registry)/$($component.name):$($component.version)-$($component.build)-rc"
$buildImage="$($component.registry)/$($component.name):$($component.version)-$($component.build)-build"
$testImage="$($component.registry)/$($component.name):$($component.version)-$($component.build)-test"

# clean up build directories
if (Test-Path -Path "./dist") {
    Remove-Item -Recurse -Force "./dist"
}

# remove docker images
docker rmi $rcImage --force
docker rmi $buildImage --force
docker rmi $testImage --force
docker image prune --force
