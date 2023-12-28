import { EnvironmentRepository } from "$lib/repositories/environment.repository";
import { EnvironmentService } from "$lib/services/environment.service";

export class EnvironmentPanelViewModel {
  private environmentService = new EnvironmentService();
  private environmentRepository = new EnvironmentRepository();

  constructor() {}

  public getEnvironment = async (
    workspaceId: string,
    environmentId: string,
  ) => {
    return this.environmentService.fetchEnvironment(workspaceId, environmentId);
  };

  public getParticularEnvironment = async (environmentId: string) => {
    return this.environmentRepository.readEnvironment(environmentId);
  };
}
