import { AmplifyBackendClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../AmplifyBackendClient";
import { RemoveBackendConfigRequest, RemoveBackendConfigResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import {
  Handler,
  MiddlewareStack,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
} from "@aws-sdk/types";
export interface RemoveBackendConfigCommandInput extends RemoveBackendConfigRequest {}
export interface RemoveBackendConfigCommandOutput extends RemoveBackendConfigResponse, __MetadataBearer {}
/**
 * <p>Removes the AWS resources that are required to access the Amplify Admin UI.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AmplifyBackendClient, RemoveBackendConfigCommand } from "@aws-sdk/client-amplifybackend"; // ES Modules import
 * // const { AmplifyBackendClient, RemoveBackendConfigCommand } = require("@aws-sdk/client-amplifybackend"); // CommonJS import
 * const client = new AmplifyBackendClient(config);
 * const command = new RemoveBackendConfigCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link RemoveBackendConfigCommandInput} for command's `input` shape.
 * @see {@link RemoveBackendConfigCommandOutput} for command's `response` shape.
 * @see {@link AmplifyBackendClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class RemoveBackendConfigCommand extends $Command<
  RemoveBackendConfigCommandInput,
  RemoveBackendConfigCommandOutput,
  AmplifyBackendClientResolvedConfig
> {
  readonly input: RemoveBackendConfigCommandInput;
  constructor(input: RemoveBackendConfigCommandInput);
  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: AmplifyBackendClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<RemoveBackendConfigCommandInput, RemoveBackendConfigCommandOutput>;
  private serialize;
  private deserialize;
}
