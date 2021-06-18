import { AthenaClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../AthenaClient";
import { DeleteDataCatalogInput, DeleteDataCatalogOutput } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import {
  Handler,
  MiddlewareStack,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
} from "@aws-sdk/types";
export interface DeleteDataCatalogCommandInput extends DeleteDataCatalogInput {}
export interface DeleteDataCatalogCommandOutput extends DeleteDataCatalogOutput, __MetadataBearer {}
/**
 * <p>Deletes a data catalog.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AthenaClient, DeleteDataCatalogCommand } from "@aws-sdk/client-athena"; // ES Modules import
 * // const { AthenaClient, DeleteDataCatalogCommand } = require("@aws-sdk/client-athena"); // CommonJS import
 * const client = new AthenaClient(config);
 * const command = new DeleteDataCatalogCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteDataCatalogCommandInput} for command's `input` shape.
 * @see {@link DeleteDataCatalogCommandOutput} for command's `response` shape.
 * @see {@link AthenaClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class DeleteDataCatalogCommand extends $Command<
  DeleteDataCatalogCommandInput,
  DeleteDataCatalogCommandOutput,
  AthenaClientResolvedConfig
> {
  readonly input: DeleteDataCatalogCommandInput;
  constructor(input: DeleteDataCatalogCommandInput);
  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: AthenaClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DeleteDataCatalogCommandInput, DeleteDataCatalogCommandOutput>;
  private serialize;
  private deserialize;
}
