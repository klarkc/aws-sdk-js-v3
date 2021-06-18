import { CloudDirectoryClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CloudDirectoryClient";
import { RemoveFacetFromObjectRequest, RemoveFacetFromObjectResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import {
  Handler,
  MiddlewareStack,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
} from "@aws-sdk/types";
export interface RemoveFacetFromObjectCommandInput extends RemoveFacetFromObjectRequest {}
export interface RemoveFacetFromObjectCommandOutput extends RemoveFacetFromObjectResponse, __MetadataBearer {}
/**
 * <p>Removes the specified facet from the specified object.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CloudDirectoryClient, RemoveFacetFromObjectCommand } from "@aws-sdk/client-clouddirectory"; // ES Modules import
 * // const { CloudDirectoryClient, RemoveFacetFromObjectCommand } = require("@aws-sdk/client-clouddirectory"); // CommonJS import
 * const client = new CloudDirectoryClient(config);
 * const command = new RemoveFacetFromObjectCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link RemoveFacetFromObjectCommandInput} for command's `input` shape.
 * @see {@link RemoveFacetFromObjectCommandOutput} for command's `response` shape.
 * @see {@link CloudDirectoryClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class RemoveFacetFromObjectCommand extends $Command<
  RemoveFacetFromObjectCommandInput,
  RemoveFacetFromObjectCommandOutput,
  CloudDirectoryClientResolvedConfig
> {
  readonly input: RemoveFacetFromObjectCommandInput;
  constructor(input: RemoveFacetFromObjectCommandInput);
  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: CloudDirectoryClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<RemoveFacetFromObjectCommandInput, RemoveFacetFromObjectCommandOutput>;
  private serialize;
  private deserialize;
}
