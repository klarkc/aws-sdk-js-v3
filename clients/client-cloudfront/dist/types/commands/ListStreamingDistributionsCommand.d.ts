import { CloudFrontClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CloudFrontClient";
import { ListStreamingDistributionsRequest, ListStreamingDistributionsResult } from "../models/models_1";
import { Command as $Command } from "@aws-sdk/smithy-client";
import {
  Handler,
  MiddlewareStack,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
} from "@aws-sdk/types";
export interface ListStreamingDistributionsCommandInput extends ListStreamingDistributionsRequest {}
export interface ListStreamingDistributionsCommandOutput extends ListStreamingDistributionsResult, __MetadataBearer {}
/**
 * <p>List streaming distributions. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CloudFrontClient, ListStreamingDistributionsCommand } from "@aws-sdk/client-cloudfront"; // ES Modules import
 * // const { CloudFrontClient, ListStreamingDistributionsCommand } = require("@aws-sdk/client-cloudfront"); // CommonJS import
 * const client = new CloudFrontClient(config);
 * const command = new ListStreamingDistributionsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListStreamingDistributionsCommandInput} for command's `input` shape.
 * @see {@link ListStreamingDistributionsCommandOutput} for command's `response` shape.
 * @see {@link CloudFrontClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class ListStreamingDistributionsCommand extends $Command<
  ListStreamingDistributionsCommandInput,
  ListStreamingDistributionsCommandOutput,
  CloudFrontClientResolvedConfig
> {
  readonly input: ListStreamingDistributionsCommandInput;
  constructor(input: ListStreamingDistributionsCommandInput);
  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: CloudFrontClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<ListStreamingDistributionsCommandInput, ListStreamingDistributionsCommandOutput>;
  private serialize;
  private deserialize;
}
