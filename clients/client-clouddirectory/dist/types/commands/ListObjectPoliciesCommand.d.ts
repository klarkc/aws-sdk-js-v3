import { CloudDirectoryClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CloudDirectoryClient";
import { ListObjectPoliciesRequest, ListObjectPoliciesResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import {
  Handler,
  MiddlewareStack,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
} from "@aws-sdk/types";
export interface ListObjectPoliciesCommandInput extends ListObjectPoliciesRequest {}
export interface ListObjectPoliciesCommandOutput extends ListObjectPoliciesResponse, __MetadataBearer {}
/**
 * <p>Returns policies attached to an object in pagination fashion.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CloudDirectoryClient, ListObjectPoliciesCommand } from "@aws-sdk/client-clouddirectory"; // ES Modules import
 * // const { CloudDirectoryClient, ListObjectPoliciesCommand } = require("@aws-sdk/client-clouddirectory"); // CommonJS import
 * const client = new CloudDirectoryClient(config);
 * const command = new ListObjectPoliciesCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListObjectPoliciesCommandInput} for command's `input` shape.
 * @see {@link ListObjectPoliciesCommandOutput} for command's `response` shape.
 * @see {@link CloudDirectoryClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class ListObjectPoliciesCommand extends $Command<
  ListObjectPoliciesCommandInput,
  ListObjectPoliciesCommandOutput,
  CloudDirectoryClientResolvedConfig
> {
  readonly input: ListObjectPoliciesCommandInput;
  constructor(input: ListObjectPoliciesCommandInput);
  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: CloudDirectoryClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<ListObjectPoliciesCommandInput, ListObjectPoliciesCommandOutput>;
  private serialize;
  private deserialize;
}
