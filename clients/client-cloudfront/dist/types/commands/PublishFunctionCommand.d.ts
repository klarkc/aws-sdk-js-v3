import { CloudFrontClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CloudFrontClient";
import { PublishFunctionRequest, PublishFunctionResult } from "../models/models_1";
import { Command as $Command } from "@aws-sdk/smithy-client";
import {
  Handler,
  MiddlewareStack,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
} from "@aws-sdk/types";
export interface PublishFunctionCommandInput extends PublishFunctionRequest {}
export interface PublishFunctionCommandOutput extends PublishFunctionResult, __MetadataBearer {}
/**
 * <p>Publishes a CloudFront function by copying the function code from the <code>DEVELOPMENT</code>
 * 			stage to <code>LIVE</code>. This automatically updates all cache behaviors that are
 * 			using this function to use the newly published copy in the <code>LIVE</code>
 * 			stage.</p>
 * 		       <p>When a function is published to the <code>LIVE</code> stage, you can attach the function to
 * 			a distribution’s cache behavior, using the function’s Amazon Resource Name (ARN).</p>
 * 		       <p>To publish a function, you must provide the function’s name and version (<code>ETag</code>
 * 			value). To get these values, you can use <code>ListFunctions</code> and
 * 			<code>DescribeFunction</code>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CloudFrontClient, PublishFunctionCommand } from "@aws-sdk/client-cloudfront"; // ES Modules import
 * // const { CloudFrontClient, PublishFunctionCommand } = require("@aws-sdk/client-cloudfront"); // CommonJS import
 * const client = new CloudFrontClient(config);
 * const command = new PublishFunctionCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link PublishFunctionCommandInput} for command's `input` shape.
 * @see {@link PublishFunctionCommandOutput} for command's `response` shape.
 * @see {@link CloudFrontClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class PublishFunctionCommand extends $Command<
  PublishFunctionCommandInput,
  PublishFunctionCommandOutput,
  CloudFrontClientResolvedConfig
> {
  readonly input: PublishFunctionCommandInput;
  constructor(input: PublishFunctionCommandInput);
  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: CloudFrontClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<PublishFunctionCommandInput, PublishFunctionCommandOutput>;
  private serialize;
  private deserialize;
}
