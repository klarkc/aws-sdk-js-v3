import { AmplifyBackendClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../AmplifyBackendClient";
import { UpdateBackendAuthRequest, UpdateBackendAuthResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import {
  Handler,
  MiddlewareStack,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
} from "@aws-sdk/types";
export interface UpdateBackendAuthCommandInput extends UpdateBackendAuthRequest {}
export interface UpdateBackendAuthCommandOutput extends UpdateBackendAuthResponse, __MetadataBearer {}
/**
 * <p>Updates an existing backend authentication resource.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AmplifyBackendClient, UpdateBackendAuthCommand } from "@aws-sdk/client-amplifybackend"; // ES Modules import
 * // const { AmplifyBackendClient, UpdateBackendAuthCommand } = require("@aws-sdk/client-amplifybackend"); // CommonJS import
 * const client = new AmplifyBackendClient(config);
 * const command = new UpdateBackendAuthCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link UpdateBackendAuthCommandInput} for command's `input` shape.
 * @see {@link UpdateBackendAuthCommandOutput} for command's `response` shape.
 * @see {@link AmplifyBackendClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class UpdateBackendAuthCommand extends $Command<
  UpdateBackendAuthCommandInput,
  UpdateBackendAuthCommandOutput,
  AmplifyBackendClientResolvedConfig
> {
  readonly input: UpdateBackendAuthCommandInput;
  constructor(input: UpdateBackendAuthCommandInput);
  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: AmplifyBackendClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<UpdateBackendAuthCommandInput, UpdateBackendAuthCommandOutput>;
  private serialize;
  private deserialize;
}
