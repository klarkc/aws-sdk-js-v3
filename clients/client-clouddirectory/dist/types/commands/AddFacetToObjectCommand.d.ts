import { CloudDirectoryClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CloudDirectoryClient";
import { AddFacetToObjectRequest, AddFacetToObjectResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import {
  Handler,
  MiddlewareStack,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
} from "@aws-sdk/types";
export interface AddFacetToObjectCommandInput extends AddFacetToObjectRequest {}
export interface AddFacetToObjectCommandOutput extends AddFacetToObjectResponse, __MetadataBearer {}
/**
 * <p>Adds a new <a>Facet</a> to an object. An object can have more than one facet applied on it.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CloudDirectoryClient, AddFacetToObjectCommand } from "@aws-sdk/client-clouddirectory"; // ES Modules import
 * // const { CloudDirectoryClient, AddFacetToObjectCommand } = require("@aws-sdk/client-clouddirectory"); // CommonJS import
 * const client = new CloudDirectoryClient(config);
 * const command = new AddFacetToObjectCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link AddFacetToObjectCommandInput} for command's `input` shape.
 * @see {@link AddFacetToObjectCommandOutput} for command's `response` shape.
 * @see {@link CloudDirectoryClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class AddFacetToObjectCommand extends $Command<
  AddFacetToObjectCommandInput,
  AddFacetToObjectCommandOutput,
  CloudDirectoryClientResolvedConfig
> {
  readonly input: AddFacetToObjectCommandInput;
  constructor(input: AddFacetToObjectCommandInput);
  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: CloudDirectoryClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<AddFacetToObjectCommandInput, AddFacetToObjectCommandOutput>;
  private serialize;
  private deserialize;
}
