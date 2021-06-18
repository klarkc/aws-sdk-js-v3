import { CloudDirectoryClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CloudDirectoryClient";
import { DeleteFacetRequest, DeleteFacetResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import {
  Handler,
  MiddlewareStack,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
} from "@aws-sdk/types";
export interface DeleteFacetCommandInput extends DeleteFacetRequest {}
export interface DeleteFacetCommandOutput extends DeleteFacetResponse, __MetadataBearer {}
/**
 * <p>Deletes a given <a>Facet</a>. All attributes and <a>Rule</a>s
 *       that are associated with the facet will be deleted. Only development schema facets are allowed
 *       deletion.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CloudDirectoryClient, DeleteFacetCommand } from "@aws-sdk/client-clouddirectory"; // ES Modules import
 * // const { CloudDirectoryClient, DeleteFacetCommand } = require("@aws-sdk/client-clouddirectory"); // CommonJS import
 * const client = new CloudDirectoryClient(config);
 * const command = new DeleteFacetCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteFacetCommandInput} for command's `input` shape.
 * @see {@link DeleteFacetCommandOutput} for command's `response` shape.
 * @see {@link CloudDirectoryClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class DeleteFacetCommand extends $Command<
  DeleteFacetCommandInput,
  DeleteFacetCommandOutput,
  CloudDirectoryClientResolvedConfig
> {
  readonly input: DeleteFacetCommandInput;
  constructor(input: DeleteFacetCommandInput);
  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: CloudDirectoryClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DeleteFacetCommandInput, DeleteFacetCommandOutput>;
  private serialize;
  private deserialize;
}
