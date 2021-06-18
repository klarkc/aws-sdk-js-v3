import { CloudFrontClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CloudFrontClient";
import { GetRealtimeLogConfigRequest, GetRealtimeLogConfigResult } from "../models/models_1";
import { Command as $Command } from "@aws-sdk/smithy-client";
import {
  Handler,
  MiddlewareStack,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
} from "@aws-sdk/types";
export interface GetRealtimeLogConfigCommandInput extends GetRealtimeLogConfigRequest {}
export interface GetRealtimeLogConfigCommandOutput extends GetRealtimeLogConfigResult, __MetadataBearer {}
/**
 * <p>Gets a real-time log configuration.</p>
 * 		       <p>To get a real-time log configuration, you can provide the configuration’s name or its Amazon
 * 			Resource Name (ARN). You must provide at least one. If you provide both, CloudFront uses the
 * 			name to identify the real-time log configuration to get.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CloudFrontClient, GetRealtimeLogConfigCommand } from "@aws-sdk/client-cloudfront"; // ES Modules import
 * // const { CloudFrontClient, GetRealtimeLogConfigCommand } = require("@aws-sdk/client-cloudfront"); // CommonJS import
 * const client = new CloudFrontClient(config);
 * const command = new GetRealtimeLogConfigCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetRealtimeLogConfigCommandInput} for command's `input` shape.
 * @see {@link GetRealtimeLogConfigCommandOutput} for command's `response` shape.
 * @see {@link CloudFrontClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class GetRealtimeLogConfigCommand extends $Command<
  GetRealtimeLogConfigCommandInput,
  GetRealtimeLogConfigCommandOutput,
  CloudFrontClientResolvedConfig
> {
  readonly input: GetRealtimeLogConfigCommandInput;
  constructor(input: GetRealtimeLogConfigCommandInput);
  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: CloudFrontClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<GetRealtimeLogConfigCommandInput, GetRealtimeLogConfigCommandOutput>;
  private serialize;
  private deserialize;
}
