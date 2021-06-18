import { CloudDirectoryClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CloudDirectoryClient";
import { ListPolicyAttachmentsRequest, ListPolicyAttachmentsResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import {
  Handler,
  MiddlewareStack,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
} from "@aws-sdk/types";
export interface ListPolicyAttachmentsCommandInput extends ListPolicyAttachmentsRequest {}
export interface ListPolicyAttachmentsCommandOutput extends ListPolicyAttachmentsResponse, __MetadataBearer {}
/**
 * <p>Returns all of the <code>ObjectIdentifiers</code> to which a given policy is attached.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CloudDirectoryClient, ListPolicyAttachmentsCommand } from "@aws-sdk/client-clouddirectory"; // ES Modules import
 * // const { CloudDirectoryClient, ListPolicyAttachmentsCommand } = require("@aws-sdk/client-clouddirectory"); // CommonJS import
 * const client = new CloudDirectoryClient(config);
 * const command = new ListPolicyAttachmentsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListPolicyAttachmentsCommandInput} for command's `input` shape.
 * @see {@link ListPolicyAttachmentsCommandOutput} for command's `response` shape.
 * @see {@link CloudDirectoryClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class ListPolicyAttachmentsCommand extends $Command<
  ListPolicyAttachmentsCommandInput,
  ListPolicyAttachmentsCommandOutput,
  CloudDirectoryClientResolvedConfig
> {
  readonly input: ListPolicyAttachmentsCommandInput;
  constructor(input: ListPolicyAttachmentsCommandInput);
  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: CloudDirectoryClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<ListPolicyAttachmentsCommandInput, ListPolicyAttachmentsCommandOutput>;
  private serialize;
  private deserialize;
}
