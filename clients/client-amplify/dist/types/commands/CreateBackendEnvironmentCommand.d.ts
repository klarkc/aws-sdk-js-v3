import { AmplifyClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../AmplifyClient";
import { CreateBackendEnvironmentRequest, CreateBackendEnvironmentResult } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import {
  Handler,
  MiddlewareStack,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
} from "@aws-sdk/types";
export interface CreateBackendEnvironmentCommandInput extends CreateBackendEnvironmentRequest {}
export interface CreateBackendEnvironmentCommandOutput extends CreateBackendEnvironmentResult, __MetadataBearer {}
/**
 * <p> Creates a new backend environment for an Amplify app. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AmplifyClient, CreateBackendEnvironmentCommand } from "@aws-sdk/client-amplify"; // ES Modules import
 * // const { AmplifyClient, CreateBackendEnvironmentCommand } = require("@aws-sdk/client-amplify"); // CommonJS import
 * const client = new AmplifyClient(config);
 * const command = new CreateBackendEnvironmentCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateBackendEnvironmentCommandInput} for command's `input` shape.
 * @see {@link CreateBackendEnvironmentCommandOutput} for command's `response` shape.
 * @see {@link AmplifyClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class CreateBackendEnvironmentCommand extends $Command<
  CreateBackendEnvironmentCommandInput,
  CreateBackendEnvironmentCommandOutput,
  AmplifyClientResolvedConfig
> {
  readonly input: CreateBackendEnvironmentCommandInput;
  constructor(input: CreateBackendEnvironmentCommandInput);
  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: AmplifyClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<CreateBackendEnvironmentCommandInput, CreateBackendEnvironmentCommandOutput>;
  private serialize;
  private deserialize;
}
