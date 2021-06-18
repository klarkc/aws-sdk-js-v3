import { AmplifyBackendClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../AmplifyBackendClient";
import { CreateBackendRequest, CreateBackendResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import {
  Handler,
  MiddlewareStack,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
} from "@aws-sdk/types";
export interface CreateBackendCommandInput extends CreateBackendRequest {}
export interface CreateBackendCommandOutput extends CreateBackendResponse, __MetadataBearer {}
/**
 * <p>This operation creates a backend for an Amplify app. Backends are automatically created at the time of app creation.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AmplifyBackendClient, CreateBackendCommand } from "@aws-sdk/client-amplifybackend"; // ES Modules import
 * // const { AmplifyBackendClient, CreateBackendCommand } = require("@aws-sdk/client-amplifybackend"); // CommonJS import
 * const client = new AmplifyBackendClient(config);
 * const command = new CreateBackendCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateBackendCommandInput} for command's `input` shape.
 * @see {@link CreateBackendCommandOutput} for command's `response` shape.
 * @see {@link AmplifyBackendClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class CreateBackendCommand extends $Command<
  CreateBackendCommandInput,
  CreateBackendCommandOutput,
  AmplifyBackendClientResolvedConfig
> {
  readonly input: CreateBackendCommandInput;
  constructor(input: CreateBackendCommandInput);
  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: AmplifyBackendClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<CreateBackendCommandInput, CreateBackendCommandOutput>;
  private serialize;
  private deserialize;
}
