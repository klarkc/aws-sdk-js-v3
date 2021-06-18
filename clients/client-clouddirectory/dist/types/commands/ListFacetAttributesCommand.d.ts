import { CloudDirectoryClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CloudDirectoryClient";
import { ListFacetAttributesRequest, ListFacetAttributesResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import {
  Handler,
  MiddlewareStack,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
} from "@aws-sdk/types";
export interface ListFacetAttributesCommandInput extends ListFacetAttributesRequest {}
export interface ListFacetAttributesCommandOutput extends ListFacetAttributesResponse, __MetadataBearer {}
/**
 * <p>Retrieves attributes attached to the facet.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CloudDirectoryClient, ListFacetAttributesCommand } from "@aws-sdk/client-clouddirectory"; // ES Modules import
 * // const { CloudDirectoryClient, ListFacetAttributesCommand } = require("@aws-sdk/client-clouddirectory"); // CommonJS import
 * const client = new CloudDirectoryClient(config);
 * const command = new ListFacetAttributesCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListFacetAttributesCommandInput} for command's `input` shape.
 * @see {@link ListFacetAttributesCommandOutput} for command's `response` shape.
 * @see {@link CloudDirectoryClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class ListFacetAttributesCommand extends $Command<
  ListFacetAttributesCommandInput,
  ListFacetAttributesCommandOutput,
  CloudDirectoryClientResolvedConfig
> {
  readonly input: ListFacetAttributesCommandInput;
  constructor(input: ListFacetAttributesCommandInput);
  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: CloudDirectoryClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<ListFacetAttributesCommandInput, ListFacetAttributesCommandOutput>;
  private serialize;
  private deserialize;
}
