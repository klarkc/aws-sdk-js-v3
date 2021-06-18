import { AmplifyBackendClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../AmplifyBackendClient";
import { GetBackendAuthRequest, GetBackendAuthResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import {
  Handler,
  MiddlewareStack,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
} from "@aws-sdk/types";
export interface GetBackendAuthCommandInput extends GetBackendAuthRequest {}
export interface GetBackendAuthCommandOutput extends GetBackendAuthResponse, __MetadataBearer {}
/**
 * <p>Gets backend auth details.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AmplifyBackendClient, GetBackendAuthCommand } from "@aws-sdk/client-amplifybackend"; // ES Modules import
 * // const { AmplifyBackendClient, GetBackendAuthCommand } = require("@aws-sdk/client-amplifybackend"); // CommonJS import
 * const client = new AmplifyBackendClient(config);
 * const command = new GetBackendAuthCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetBackendAuthCommandInput} for command's `input` shape.
 * @see {@link GetBackendAuthCommandOutput} for command's `response` shape.
 * @see {@link AmplifyBackendClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class GetBackendAuthCommand extends $Command<
  GetBackendAuthCommandInput,
  GetBackendAuthCommandOutput,
  AmplifyBackendClientResolvedConfig
> {
  readonly input: GetBackendAuthCommandInput;
  constructor(input: GetBackendAuthCommandInput);
  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: AmplifyBackendClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<GetBackendAuthCommandInput, GetBackendAuthCommandOutput>;
  private serialize;
  private deserialize;
}
