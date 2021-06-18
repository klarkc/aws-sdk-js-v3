import { CloudDirectoryClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CloudDirectoryClient";
import { ListTypedLinkFacetNamesRequest, ListTypedLinkFacetNamesResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import {
  Handler,
  MiddlewareStack,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
} from "@aws-sdk/types";
export interface ListTypedLinkFacetNamesCommandInput extends ListTypedLinkFacetNamesRequest {}
export interface ListTypedLinkFacetNamesCommandOutput extends ListTypedLinkFacetNamesResponse, __MetadataBearer {}
/**
 * <p>Returns a paginated list of <code>TypedLink</code> facet names for a particular schema.
 *       For more information, see <a href="https://docs.aws.amazon.com/clouddirectory/latest/developerguide/directory_objects_links.html#directory_objects_links_typedlink">Typed Links</a>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CloudDirectoryClient, ListTypedLinkFacetNamesCommand } from "@aws-sdk/client-clouddirectory"; // ES Modules import
 * // const { CloudDirectoryClient, ListTypedLinkFacetNamesCommand } = require("@aws-sdk/client-clouddirectory"); // CommonJS import
 * const client = new CloudDirectoryClient(config);
 * const command = new ListTypedLinkFacetNamesCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListTypedLinkFacetNamesCommandInput} for command's `input` shape.
 * @see {@link ListTypedLinkFacetNamesCommandOutput} for command's `response` shape.
 * @see {@link CloudDirectoryClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class ListTypedLinkFacetNamesCommand extends $Command<
  ListTypedLinkFacetNamesCommandInput,
  ListTypedLinkFacetNamesCommandOutput,
  CloudDirectoryClientResolvedConfig
> {
  readonly input: ListTypedLinkFacetNamesCommandInput;
  constructor(input: ListTypedLinkFacetNamesCommandInput);
  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: CloudDirectoryClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<ListTypedLinkFacetNamesCommandInput, ListTypedLinkFacetNamesCommandOutput>;
  private serialize;
  private deserialize;
}
