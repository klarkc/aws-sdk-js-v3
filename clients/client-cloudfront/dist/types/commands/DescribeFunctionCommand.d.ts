import { CloudFrontClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CloudFrontClient";
import { DescribeFunctionRequest, DescribeFunctionResult } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import {
  Handler,
  MiddlewareStack,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
} from "@aws-sdk/types";
export interface DescribeFunctionCommandInput extends DescribeFunctionRequest {}
export interface DescribeFunctionCommandOutput extends DescribeFunctionResult, __MetadataBearer {}
/**
 * <p>Gets configuration information and metadata about a CloudFront function, but not the function’s
 * 			code. To get a function’s code, use <code>GetFunction</code>.</p>
 * 		       <p>To get configuration information and metadata about a function, you must provide the
 * 			function’s name and stage. To get these values, you can use
 * 			<code>ListFunctions</code>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CloudFrontClient, DescribeFunctionCommand } from "@aws-sdk/client-cloudfront"; // ES Modules import
 * // const { CloudFrontClient, DescribeFunctionCommand } = require("@aws-sdk/client-cloudfront"); // CommonJS import
 * const client = new CloudFrontClient(config);
 * const command = new DescribeFunctionCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeFunctionCommandInput} for command's `input` shape.
 * @see {@link DescribeFunctionCommandOutput} for command's `response` shape.
 * @see {@link CloudFrontClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class DescribeFunctionCommand extends $Command<
  DescribeFunctionCommandInput,
  DescribeFunctionCommandOutput,
  CloudFrontClientResolvedConfig
> {
  readonly input: DescribeFunctionCommandInput;
  constructor(input: DescribeFunctionCommandInput);
  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: CloudFrontClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DescribeFunctionCommandInput, DescribeFunctionCommandOutput>;
  private serialize;
  private deserialize;
}
