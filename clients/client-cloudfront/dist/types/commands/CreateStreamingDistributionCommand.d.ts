import { CloudFrontClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CloudFrontClient";
import { CreateStreamingDistributionRequest, CreateStreamingDistributionResult } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import {
  Handler,
  MiddlewareStack,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
} from "@aws-sdk/types";
export interface CreateStreamingDistributionCommandInput extends CreateStreamingDistributionRequest {}
export interface CreateStreamingDistributionCommandOutput extends CreateStreamingDistributionResult, __MetadataBearer {}
/**
 * <p>This API is deprecated.
 *             Amazon CloudFront is deprecating real-time messaging protocol (RTMP) distributions on December 31, 2020.
 *             For more information, <a href="http://forums.aws.amazon.com/ann.jspa?annID=7356">read the announcement</a> on the Amazon CloudFront discussion forum.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CloudFrontClient, CreateStreamingDistributionCommand } from "@aws-sdk/client-cloudfront"; // ES Modules import
 * // const { CloudFrontClient, CreateStreamingDistributionCommand } = require("@aws-sdk/client-cloudfront"); // CommonJS import
 * const client = new CloudFrontClient(config);
 * const command = new CreateStreamingDistributionCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateStreamingDistributionCommandInput} for command's `input` shape.
 * @see {@link CreateStreamingDistributionCommandOutput} for command's `response` shape.
 * @see {@link CloudFrontClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class CreateStreamingDistributionCommand extends $Command<
  CreateStreamingDistributionCommandInput,
  CreateStreamingDistributionCommandOutput,
  CloudFrontClientResolvedConfig
> {
  readonly input: CreateStreamingDistributionCommandInput;
  constructor(input: CreateStreamingDistributionCommandInput);
  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: CloudFrontClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<CreateStreamingDistributionCommandInput, CreateStreamingDistributionCommandOutput>;
  private serialize;
  private deserialize;
}
