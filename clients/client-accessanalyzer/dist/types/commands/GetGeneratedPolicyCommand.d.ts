import { AccessAnalyzerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../AccessAnalyzerClient";
import { GetGeneratedPolicyRequest, GetGeneratedPolicyResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import {
  Handler,
  MiddlewareStack,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
} from "@aws-sdk/types";
export interface GetGeneratedPolicyCommandInput extends GetGeneratedPolicyRequest {}
export interface GetGeneratedPolicyCommandOutput extends GetGeneratedPolicyResponse, __MetadataBearer {}
/**
 * <p>Retrieves the policy that was generated using <code>StartPolicyGeneration</code>.
 *       </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AccessAnalyzerClient, GetGeneratedPolicyCommand } from "@aws-sdk/client-accessanalyzer"; // ES Modules import
 * // const { AccessAnalyzerClient, GetGeneratedPolicyCommand } = require("@aws-sdk/client-accessanalyzer"); // CommonJS import
 * const client = new AccessAnalyzerClient(config);
 * const command = new GetGeneratedPolicyCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetGeneratedPolicyCommandInput} for command's `input` shape.
 * @see {@link GetGeneratedPolicyCommandOutput} for command's `response` shape.
 * @see {@link AccessAnalyzerClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class GetGeneratedPolicyCommand extends $Command<
  GetGeneratedPolicyCommandInput,
  GetGeneratedPolicyCommandOutput,
  AccessAnalyzerClientResolvedConfig
> {
  readonly input: GetGeneratedPolicyCommandInput;
  constructor(input: GetGeneratedPolicyCommandInput);
  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: AccessAnalyzerClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<GetGeneratedPolicyCommandInput, GetGeneratedPolicyCommandOutput>;
  private serialize;
  private deserialize;
}
