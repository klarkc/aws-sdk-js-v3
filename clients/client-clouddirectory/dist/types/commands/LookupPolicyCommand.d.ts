import { CloudDirectoryClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CloudDirectoryClient";
import { LookupPolicyRequest, LookupPolicyResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import {
  Handler,
  MiddlewareStack,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
} from "@aws-sdk/types";
export interface LookupPolicyCommandInput extends LookupPolicyRequest {}
export interface LookupPolicyCommandOutput extends LookupPolicyResponse, __MetadataBearer {}
/**
 * <p>Lists all policies from the root of the <a>Directory</a> to the object
 *       specified. If there are no policies present, an empty list is returned. If policies are
 *       present, and if some objects don't have the policies attached, it returns the <code>ObjectIdentifier</code>
 *       for such objects. If policies are present, it returns <code>ObjectIdentifier</code>, <code>policyId</code>, and
 *       <code>policyType</code>. Paths that don't lead to the root from the target object are ignored. For more
 *       information, see <a href="https://docs.aws.amazon.com/clouddirectory/latest/developerguide/key_concepts_directory.html#key_concepts_policies">Policies</a>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CloudDirectoryClient, LookupPolicyCommand } from "@aws-sdk/client-clouddirectory"; // ES Modules import
 * // const { CloudDirectoryClient, LookupPolicyCommand } = require("@aws-sdk/client-clouddirectory"); // CommonJS import
 * const client = new CloudDirectoryClient(config);
 * const command = new LookupPolicyCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link LookupPolicyCommandInput} for command's `input` shape.
 * @see {@link LookupPolicyCommandOutput} for command's `response` shape.
 * @see {@link CloudDirectoryClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class LookupPolicyCommand extends $Command<
  LookupPolicyCommandInput,
  LookupPolicyCommandOutput,
  CloudDirectoryClientResolvedConfig
> {
  readonly input: LookupPolicyCommandInput;
  constructor(input: LookupPolicyCommandInput);
  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: CloudDirectoryClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<LookupPolicyCommandInput, LookupPolicyCommandOutput>;
  private serialize;
  private deserialize;
}
