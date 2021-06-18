import { CloudFrontClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CloudFrontClient";
import { CreateFunctionRequest, CreateFunctionResult } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import {
  Handler,
  MiddlewareStack,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
} from "@aws-sdk/types";
export interface CreateFunctionCommandInput extends CreateFunctionRequest {}
export interface CreateFunctionCommandOutput extends CreateFunctionResult, __MetadataBearer {}
/**
 * <p>Creates a CloudFront function.</p>
 * 		       <p>To create a function, you provide the function code and some configuration information
 * 			about the function. The response contains an Amazon Resource Name (ARN) that uniquely
 * 			identifies the function.</p>
 * 		       <p>When you create a function, it’s in the <code>DEVELOPMENT</code> stage. In this stage, you
 * 			can test the function with <code>TestFunction</code>, and update it with
 * 			<code>UpdateFunction</code>.</p>
 * 		       <p>When you’re ready to use your function with a CloudFront distribution, use
 * 			<code>PublishFunction</code> to copy the function from the <code>DEVELOPMENT</code>
 * 			stage to <code>LIVE</code>. When it’s live, you can attach the function to a
 * 			distribution’s cache behavior, using the function’s ARN.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CloudFrontClient, CreateFunctionCommand } from "@aws-sdk/client-cloudfront"; // ES Modules import
 * // const { CloudFrontClient, CreateFunctionCommand } = require("@aws-sdk/client-cloudfront"); // CommonJS import
 * const client = new CloudFrontClient(config);
 * const command = new CreateFunctionCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateFunctionCommandInput} for command's `input` shape.
 * @see {@link CreateFunctionCommandOutput} for command's `response` shape.
 * @see {@link CloudFrontClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class CreateFunctionCommand extends $Command<
  CreateFunctionCommandInput,
  CreateFunctionCommandOutput,
  CloudFrontClientResolvedConfig
> {
  readonly input: CreateFunctionCommandInput;
  constructor(input: CreateFunctionCommandInput);
  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: CloudFrontClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<CreateFunctionCommandInput, CreateFunctionCommandOutput>;
  private serialize;
  private deserialize;
}
