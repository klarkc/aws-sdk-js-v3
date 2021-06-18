import { AmplifyBackendClient } from "./AmplifyBackendClient";
import { CloneBackendCommandInput, CloneBackendCommandOutput } from "./commands/CloneBackendCommand";
import { CreateBackendAPICommandInput, CreateBackendAPICommandOutput } from "./commands/CreateBackendAPICommand";
import { CreateBackendAuthCommandInput, CreateBackendAuthCommandOutput } from "./commands/CreateBackendAuthCommand";
import { CreateBackendCommandInput, CreateBackendCommandOutput } from "./commands/CreateBackendCommand";
import {
  CreateBackendConfigCommandInput,
  CreateBackendConfigCommandOutput,
} from "./commands/CreateBackendConfigCommand";
import { CreateTokenCommandInput, CreateTokenCommandOutput } from "./commands/CreateTokenCommand";
import { DeleteBackendAPICommandInput, DeleteBackendAPICommandOutput } from "./commands/DeleteBackendAPICommand";
import { DeleteBackendAuthCommandInput, DeleteBackendAuthCommandOutput } from "./commands/DeleteBackendAuthCommand";
import { DeleteBackendCommandInput, DeleteBackendCommandOutput } from "./commands/DeleteBackendCommand";
import { DeleteTokenCommandInput, DeleteTokenCommandOutput } from "./commands/DeleteTokenCommand";
import {
  GenerateBackendAPIModelsCommandInput,
  GenerateBackendAPIModelsCommandOutput,
} from "./commands/GenerateBackendAPIModelsCommand";
import { GetBackendAPICommandInput, GetBackendAPICommandOutput } from "./commands/GetBackendAPICommand";
import {
  GetBackendAPIModelsCommandInput,
  GetBackendAPIModelsCommandOutput,
} from "./commands/GetBackendAPIModelsCommand";
import { GetBackendAuthCommandInput, GetBackendAuthCommandOutput } from "./commands/GetBackendAuthCommand";
import { GetBackendCommandInput, GetBackendCommandOutput } from "./commands/GetBackendCommand";
import { GetBackendJobCommandInput, GetBackendJobCommandOutput } from "./commands/GetBackendJobCommand";
import { GetTokenCommandInput, GetTokenCommandOutput } from "./commands/GetTokenCommand";
import { ListBackendJobsCommandInput, ListBackendJobsCommandOutput } from "./commands/ListBackendJobsCommand";
import { RemoveAllBackendsCommandInput, RemoveAllBackendsCommandOutput } from "./commands/RemoveAllBackendsCommand";
import {
  RemoveBackendConfigCommandInput,
  RemoveBackendConfigCommandOutput,
} from "./commands/RemoveBackendConfigCommand";
import { UpdateBackendAPICommandInput, UpdateBackendAPICommandOutput } from "./commands/UpdateBackendAPICommand";
import { UpdateBackendAuthCommandInput, UpdateBackendAuthCommandOutput } from "./commands/UpdateBackendAuthCommand";
import {
  UpdateBackendConfigCommandInput,
  UpdateBackendConfigCommandOutput,
} from "./commands/UpdateBackendConfigCommand";
import { UpdateBackendJobCommandInput, UpdateBackendJobCommandOutput } from "./commands/UpdateBackendJobCommand";
import { HttpHandlerOptions as __HttpHandlerOptions } from "@aws-sdk/types";
/**
 * <p>AWS Amplify Admin API</p>
 */
export declare class AmplifyBackend extends AmplifyBackendClient {
  /**
   * <p>This operation clones an existing backend.</p>
   */
  cloneBackend(args: CloneBackendCommandInput, options?: __HttpHandlerOptions): Promise<CloneBackendCommandOutput>;
  cloneBackend(args: CloneBackendCommandInput, cb: (err: any, data?: CloneBackendCommandOutput) => void): void;
  cloneBackend(
    args: CloneBackendCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CloneBackendCommandOutput) => void
  ): void;
  /**
   * <p>This operation creates a backend for an Amplify app. Backends are automatically created at the time of app creation.</p>
   */
  createBackend(args: CreateBackendCommandInput, options?: __HttpHandlerOptions): Promise<CreateBackendCommandOutput>;
  createBackend(args: CreateBackendCommandInput, cb: (err: any, data?: CreateBackendCommandOutput) => void): void;
  createBackend(
    args: CreateBackendCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateBackendCommandOutput) => void
  ): void;
  /**
   * <p>Creates a new backend API resource.</p>
   */
  createBackendAPI(
    args: CreateBackendAPICommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateBackendAPICommandOutput>;
  createBackendAPI(
    args: CreateBackendAPICommandInput,
    cb: (err: any, data?: CreateBackendAPICommandOutput) => void
  ): void;
  createBackendAPI(
    args: CreateBackendAPICommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateBackendAPICommandOutput) => void
  ): void;
  /**
   * <p>Creates a new backend authentication resource.</p>
   */
  createBackendAuth(
    args: CreateBackendAuthCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateBackendAuthCommandOutput>;
  createBackendAuth(
    args: CreateBackendAuthCommandInput,
    cb: (err: any, data?: CreateBackendAuthCommandOutput) => void
  ): void;
  createBackendAuth(
    args: CreateBackendAuthCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateBackendAuthCommandOutput) => void
  ): void;
  /**
   * <p>Creates a config object for a backend.</p>
   */
  createBackendConfig(
    args: CreateBackendConfigCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateBackendConfigCommandOutput>;
  createBackendConfig(
    args: CreateBackendConfigCommandInput,
    cb: (err: any, data?: CreateBackendConfigCommandOutput) => void
  ): void;
  createBackendConfig(
    args: CreateBackendConfigCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateBackendConfigCommandOutput) => void
  ): void;
  /**
   * <p>Generates a one-time challenge code to authenticate a user into your Amplify Admin UI.</p>
   */
  createToken(args: CreateTokenCommandInput, options?: __HttpHandlerOptions): Promise<CreateTokenCommandOutput>;
  createToken(args: CreateTokenCommandInput, cb: (err: any, data?: CreateTokenCommandOutput) => void): void;
  createToken(
    args: CreateTokenCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateTokenCommandOutput) => void
  ): void;
  /**
   * <p>Removes an existing environment from your Amplify project.</p>
   */
  deleteBackend(args: DeleteBackendCommandInput, options?: __HttpHandlerOptions): Promise<DeleteBackendCommandOutput>;
  deleteBackend(args: DeleteBackendCommandInput, cb: (err: any, data?: DeleteBackendCommandOutput) => void): void;
  deleteBackend(
    args: DeleteBackendCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteBackendCommandOutput) => void
  ): void;
  /**
   * <p>Deletes an existing backend API resource.</p>
   */
  deleteBackendAPI(
    args: DeleteBackendAPICommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteBackendAPICommandOutput>;
  deleteBackendAPI(
    args: DeleteBackendAPICommandInput,
    cb: (err: any, data?: DeleteBackendAPICommandOutput) => void
  ): void;
  deleteBackendAPI(
    args: DeleteBackendAPICommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteBackendAPICommandOutput) => void
  ): void;
  /**
   * <p>Deletes an existing backend authentication resource.</p>
   */
  deleteBackendAuth(
    args: DeleteBackendAuthCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteBackendAuthCommandOutput>;
  deleteBackendAuth(
    args: DeleteBackendAuthCommandInput,
    cb: (err: any, data?: DeleteBackendAuthCommandOutput) => void
  ): void;
  deleteBackendAuth(
    args: DeleteBackendAuthCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteBackendAuthCommandOutput) => void
  ): void;
  /**
   * <p>Deletes the challenge token based on the given appId and sessionId.</p>
   */
  deleteToken(args: DeleteTokenCommandInput, options?: __HttpHandlerOptions): Promise<DeleteTokenCommandOutput>;
  deleteToken(args: DeleteTokenCommandInput, cb: (err: any, data?: DeleteTokenCommandOutput) => void): void;
  deleteToken(
    args: DeleteTokenCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteTokenCommandOutput) => void
  ): void;
  /**
   * <p>Generates a model schema for an existing backend API resource.</p>
   */
  generateBackendAPIModels(
    args: GenerateBackendAPIModelsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GenerateBackendAPIModelsCommandOutput>;
  generateBackendAPIModels(
    args: GenerateBackendAPIModelsCommandInput,
    cb: (err: any, data?: GenerateBackendAPIModelsCommandOutput) => void
  ): void;
  generateBackendAPIModels(
    args: GenerateBackendAPIModelsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GenerateBackendAPIModelsCommandOutput) => void
  ): void;
  /**
   * <p>Provides project-level details for your Amplify UI project.</p>
   */
  getBackend(args: GetBackendCommandInput, options?: __HttpHandlerOptions): Promise<GetBackendCommandOutput>;
  getBackend(args: GetBackendCommandInput, cb: (err: any, data?: GetBackendCommandOutput) => void): void;
  getBackend(
    args: GetBackendCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetBackendCommandOutput) => void
  ): void;
  /**
   * <p>Gets the details for a backend API.</p>
   */
  getBackendAPI(args: GetBackendAPICommandInput, options?: __HttpHandlerOptions): Promise<GetBackendAPICommandOutput>;
  getBackendAPI(args: GetBackendAPICommandInput, cb: (err: any, data?: GetBackendAPICommandOutput) => void): void;
  getBackendAPI(
    args: GetBackendAPICommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetBackendAPICommandOutput) => void
  ): void;
  /**
   * <p>Generates a model schema for existing backend API resource.</p>
   */
  getBackendAPIModels(
    args: GetBackendAPIModelsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetBackendAPIModelsCommandOutput>;
  getBackendAPIModels(
    args: GetBackendAPIModelsCommandInput,
    cb: (err: any, data?: GetBackendAPIModelsCommandOutput) => void
  ): void;
  getBackendAPIModels(
    args: GetBackendAPIModelsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetBackendAPIModelsCommandOutput) => void
  ): void;
  /**
   * <p>Gets backend auth details.</p>
   */
  getBackendAuth(
    args: GetBackendAuthCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetBackendAuthCommandOutput>;
  getBackendAuth(args: GetBackendAuthCommandInput, cb: (err: any, data?: GetBackendAuthCommandOutput) => void): void;
  getBackendAuth(
    args: GetBackendAuthCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetBackendAuthCommandOutput) => void
  ): void;
  /**
   * <p>Returns information about a specific job.</p>
   */
  getBackendJob(args: GetBackendJobCommandInput, options?: __HttpHandlerOptions): Promise<GetBackendJobCommandOutput>;
  getBackendJob(args: GetBackendJobCommandInput, cb: (err: any, data?: GetBackendJobCommandOutput) => void): void;
  getBackendJob(
    args: GetBackendJobCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetBackendJobCommandOutput) => void
  ): void;
  /**
   * <p>Gets the challenge token based on the given appId and sessionId.</p>
   */
  getToken(args: GetTokenCommandInput, options?: __HttpHandlerOptions): Promise<GetTokenCommandOutput>;
  getToken(args: GetTokenCommandInput, cb: (err: any, data?: GetTokenCommandOutput) => void): void;
  getToken(
    args: GetTokenCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetTokenCommandOutput) => void
  ): void;
  /**
   * <p>Lists the jobs for the backend of an Amplify app.</p>
   */
  listBackendJobs(
    args: ListBackendJobsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListBackendJobsCommandOutput>;
  listBackendJobs(args: ListBackendJobsCommandInput, cb: (err: any, data?: ListBackendJobsCommandOutput) => void): void;
  listBackendJobs(
    args: ListBackendJobsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListBackendJobsCommandOutput) => void
  ): void;
  /**
   * <p>Removes all backend environments from your Amplify project.</p>
   */
  removeAllBackends(
    args: RemoveAllBackendsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<RemoveAllBackendsCommandOutput>;
  removeAllBackends(
    args: RemoveAllBackendsCommandInput,
    cb: (err: any, data?: RemoveAllBackendsCommandOutput) => void
  ): void;
  removeAllBackends(
    args: RemoveAllBackendsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: RemoveAllBackendsCommandOutput) => void
  ): void;
  /**
   * <p>Removes the AWS resources that are required to access the Amplify Admin UI.</p>
   */
  removeBackendConfig(
    args: RemoveBackendConfigCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<RemoveBackendConfigCommandOutput>;
  removeBackendConfig(
    args: RemoveBackendConfigCommandInput,
    cb: (err: any, data?: RemoveBackendConfigCommandOutput) => void
  ): void;
  removeBackendConfig(
    args: RemoveBackendConfigCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: RemoveBackendConfigCommandOutput) => void
  ): void;
  /**
   * <p>Updates an existing backend API resource.</p>
   */
  updateBackendAPI(
    args: UpdateBackendAPICommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateBackendAPICommandOutput>;
  updateBackendAPI(
    args: UpdateBackendAPICommandInput,
    cb: (err: any, data?: UpdateBackendAPICommandOutput) => void
  ): void;
  updateBackendAPI(
    args: UpdateBackendAPICommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateBackendAPICommandOutput) => void
  ): void;
  /**
   * <p>Updates an existing backend authentication resource.</p>
   */
  updateBackendAuth(
    args: UpdateBackendAuthCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateBackendAuthCommandOutput>;
  updateBackendAuth(
    args: UpdateBackendAuthCommandInput,
    cb: (err: any, data?: UpdateBackendAuthCommandOutput) => void
  ): void;
  updateBackendAuth(
    args: UpdateBackendAuthCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateBackendAuthCommandOutput) => void
  ): void;
  /**
   * <p>Updates the AWS resources that are required to access the Amplify Admin UI.</p>
   */
  updateBackendConfig(
    args: UpdateBackendConfigCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateBackendConfigCommandOutput>;
  updateBackendConfig(
    args: UpdateBackendConfigCommandInput,
    cb: (err: any, data?: UpdateBackendConfigCommandOutput) => void
  ): void;
  updateBackendConfig(
    args: UpdateBackendConfigCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateBackendConfigCommandOutput) => void
  ): void;
  /**
   * <p>Updates a specific job.</p>
   */
  updateBackendJob(
    args: UpdateBackendJobCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateBackendJobCommandOutput>;
  updateBackendJob(
    args: UpdateBackendJobCommandInput,
    cb: (err: any, data?: UpdateBackendJobCommandOutput) => void
  ): void;
  updateBackendJob(
    args: UpdateBackendJobCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateBackendJobCommandOutput) => void
  ): void;
}
