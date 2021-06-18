import { AthenaClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../AthenaClient";
import { UpdateDataCatalogInput, UpdateDataCatalogOutput } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import {
  Handler,
  MiddlewareStack,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
} from "@aws-sdk/types";
export interface UpdateDataCatalogCommandInput extends UpdateDataCatalogInput {}
export interface UpdateDataCatalogCommandOutput extends UpdateDataCatalogOutput, __MetadataBearer {}
/**
 * <p>Updates the data catalog that has the specified name.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AthenaClient, UpdateDataCatalogCommand } from "@aws-sdk/client-athena"; // ES Modules import
 * // const { AthenaClient, UpdateDataCatalogCommand } = require("@aws-sdk/client-athena"); // CommonJS import
 * const client = new AthenaClient(config);
 * const command = new UpdateDataCatalogCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link UpdateDataCatalogCommandInput} for command's `input` shape.
 * @see {@link UpdateDataCatalogCommandOutput} for command's `response` shape.
 * @see {@link AthenaClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class UpdateDataCatalogCommand extends $Command<
  UpdateDataCatalogCommandInput,
  UpdateDataCatalogCommandOutput,
  AthenaClientResolvedConfig
> {
  readonly input: UpdateDataCatalogCommandInput;
  constructor(input: UpdateDataCatalogCommandInput);
  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: AthenaClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<UpdateDataCatalogCommandInput, UpdateDataCatalogCommandOutput>;
  private serialize;
  private deserialize;
}
