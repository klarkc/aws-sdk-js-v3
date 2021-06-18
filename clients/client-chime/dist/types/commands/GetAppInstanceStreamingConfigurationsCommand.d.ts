import { ChimeClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ChimeClient";
import {
  GetAppInstanceStreamingConfigurationsRequest,
  GetAppInstanceStreamingConfigurationsResponse,
} from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import {
  Handler,
  MiddlewareStack,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
} from "@aws-sdk/types";
export interface GetAppInstanceStreamingConfigurationsCommandInput
  extends GetAppInstanceStreamingConfigurationsRequest {}
export interface GetAppInstanceStreamingConfigurationsCommandOutput
  extends GetAppInstanceStreamingConfigurationsResponse,
    __MetadataBearer {}
/**
 * <p>Gets the streaming settings for an <code>AppInstance</code>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ChimeClient, GetAppInstanceStreamingConfigurationsCommand } from "@aws-sdk/client-chime"; // ES Modules import
 * // const { ChimeClient, GetAppInstanceStreamingConfigurationsCommand } = require("@aws-sdk/client-chime"); // CommonJS import
 * const client = new ChimeClient(config);
 * const command = new GetAppInstanceStreamingConfigurationsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetAppInstanceStreamingConfigurationsCommandInput} for command's `input` shape.
 * @see {@link GetAppInstanceStreamingConfigurationsCommandOutput} for command's `response` shape.
 * @see {@link ChimeClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class GetAppInstanceStreamingConfigurationsCommand extends $Command<
  GetAppInstanceStreamingConfigurationsCommandInput,
  GetAppInstanceStreamingConfigurationsCommandOutput,
  ChimeClientResolvedConfig
> {
  readonly input: GetAppInstanceStreamingConfigurationsCommandInput;
  constructor(input: GetAppInstanceStreamingConfigurationsCommandInput);
  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: ChimeClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<GetAppInstanceStreamingConfigurationsCommandInput, GetAppInstanceStreamingConfigurationsCommandOutput>;
  private serialize;
  private deserialize;
}
