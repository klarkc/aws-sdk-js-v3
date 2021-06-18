import { CloudFrontClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CloudFrontClient";
import { GetInvalidationRequest, GetInvalidationResult } from "../models/models_1";
import { Command as $Command } from "@aws-sdk/smithy-client";
import {
  Handler,
  MiddlewareStack,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
} from "@aws-sdk/types";
export interface GetInvalidationCommandInput extends GetInvalidationRequest {}
export interface GetInvalidationCommandOutput extends GetInvalidationResult, __MetadataBearer {}
/**
 * <p>Get the information about an invalidation. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CloudFrontClient, GetInvalidationCommand } from "@aws-sdk/client-cloudfront"; // ES Modules import
 * // const { CloudFrontClient, GetInvalidationCommand } = require("@aws-sdk/client-cloudfront"); // CommonJS import
 * const client = new CloudFrontClient(config);
 * const command = new GetInvalidationCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetInvalidationCommandInput} for command's `input` shape.
 * @see {@link GetInvalidationCommandOutput} for command's `response` shape.
 * @see {@link CloudFrontClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class GetInvalidationCommand extends $Command<
  GetInvalidationCommandInput,
  GetInvalidationCommandOutput,
  CloudFrontClientResolvedConfig
> {
  readonly input: GetInvalidationCommandInput;
  constructor(input: GetInvalidationCommandInput);
  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: CloudFrontClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<GetInvalidationCommandInput, GetInvalidationCommandOutput>;
  private serialize;
  private deserialize;
}
