export class WorldProfileError extends Error {
  constructor(message: string, public code: string) {
    super(message);
    this.name = 'WorldProfileError';
  }
}

export class WorldPresetNotFoundError extends WorldProfileError {
  constructor(preset: string) {
    super(`World preset not found: ${preset}`, 'WORLD_PRESET_NOT_FOUND');
    this.name = 'WorldPresetNotFoundError';
  }
}

export class WorldPresetRequiredError extends WorldProfileError {
  constructor() {
    super('World preset parameter is required', 'WORLD_PRESET_REQUIRED');
    this.name = 'WorldPresetRequiredError';
  }
}

export class GenreConsistencyViolationError extends WorldProfileError {
  constructor(public violations: Array<{ concept: string; path?: string; reason: string }>) {
    super(`Genre consistency violation: ${violations.map((v) => v.concept).join(', ')}`, 'GENRE_CONSISTENCY_VIOLATION');
    this.name = 'GenreConsistencyViolationError';
  }
}
