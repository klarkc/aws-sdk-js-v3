import { AmplifyBackendClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../AmplifyBackendClient";
import { UpdateBackendAPIRequest, UpdateBackendAPIResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import {
  Handler,
  MiddlewareStack,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
} from "@aws-sdk/types";
export interface UpdateBackendAPICommandInput extends UpdateBackendAPIRequest {}
export interface UpdateBackendAPICommandOutput extends UpdateBackendAPIResponse, __MetadataBearer {}
/**
 * <p>Updates an existing backend API resource.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AmplifyBackendClient, UpdateBackendAPICommand } from "@aws-sdk/client-amplifybackend"; // ES Modules import
 * // const { AmplifyBackendClient, UpdateBackendAPICommand } = require("@aws-sdk/client-amplifybackend"); // CommonJS import
 * const client = new AmplifyBackendClient(config);
 * const command = new UpdateBackendAPICommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link UpdateBackendAPICommandInput} for command's `input` shape.
 * @see {@link UpdateBackendAPICommandOutput} for command's `response` shape.
 * @see {@link AmplifyBackendClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class UpdateBackendAPICommand extends $Command<
  UpdateBackendAPICommandInput,
  UpdateBackendAPICommandOutput,
  AmplifyBackendClientResolvedConfig
> {
  readonly input: UpdateBackendAPICommandInput;
  constructor(input: UpdateBackendAPICommandInput);
  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: AmplifyBackendClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<UpdateBackendAPICommandInput, UpdateBackendAPICommandOutput>;
  private serialize;
  private deserialize;
}
