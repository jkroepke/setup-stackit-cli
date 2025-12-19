import { clean } from 'semver'
import { extractTar, extractZip } from '@actions/tool-cache'

export const toolName = 'stackit'
export const githubRepository = 'stackitcloud/stackit-cli'

// renovate: github=stackitcloud/stackit-cli
export const defaultVersion = 'v0.50.0'

export function binaryName(version: string, os: string, arch: string): string {
  version = clean(version) || version

  return `stackit-cli_${version}_${os}_${arch}.${os === 'windows' ? 'zip' : 'tar.gz'}`
}

export async function extractBinary(
  path: string,
  version: string,
  os: string,
  _arch: string
): Promise<string> {
  let extractedFolder

  if (os === 'windows') {
    extractedFolder = await extractZip(path)
  } else {
    extractedFolder = await extractTar(path)
  }

  return `${extractedFolder}/${toolName}${os === 'windows' ? '.exe' : ''}`
}

export function getVersionArguments(): string[] {
  return ['--version']
}
