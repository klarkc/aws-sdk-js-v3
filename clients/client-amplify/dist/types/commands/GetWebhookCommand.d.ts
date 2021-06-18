import { AmplifyClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../AmplifyClient";
import { GetWebhookRequest, GetWebhookResult } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import {
  Handler,
  MiddlewareStack,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
} from "@aws-sdk/types";
export interface GetWebhookCommandInput extends GetWebhookRequest {}
export interface GetWebhookCommandOutput extends GetWebhookResult, __MetadataBearer {}
/**
 * <p> Returns the webhook information that corresponds to a specified webhook ID. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AmplifyClient, GetWebhookCommand } from "@aws-sdk/client-amplify"; // ES Modules import
 * // const { AmplifyClient, GetWebhookCommand } = require("@aws-sdk/client-amplify"); // CommonJS import
 * const client = new AmplifyClient(config);
 * const command = new GetWebhookCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetWebhookCommandInput} for command's `input` shape.
 * @see {@link GetWebhookCommandOutput} for command's `response` shape.
 * @see {@link AmplifyClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class GetWebhookCommand extends $Command<
  GetWebhookCommandInput,
  GetWebhookCommandOutput,
  AmplifyClientResolvedConfig
> {
  readonly input: GetWebhookCommandInput;
  constructor(input: GetWebhookCommandInput);
  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: AmplifyClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<GetWebhookCommandInput, GetWebhookCommandOutput>;
  private serialize;
  private deserialize;
}
