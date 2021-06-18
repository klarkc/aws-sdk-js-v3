import { AthenaClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../AthenaClient";
import { CreateDataCatalogInput, CreateDataCatalogOutput } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import {
  Handler,
  MiddlewareStack,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
} from "@aws-sdk/types";
export interface CreateDataCatalogCommandInput extends CreateDataCatalogInput {}
export interface CreateDataCatalogCommandOutput extends CreateDataCatalogOutput, __MetadataBearer {}
/**
 * <p>Creates (registers) a data catalog with the specified name and properties. Catalogs
 *             created are visible to all users of the same AWS account.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AthenaClient, CreateDataCatalogCommand } from "@aws-sdk/client-athena"; // ES Modules import
 * // const { AthenaClient, CreateDataCatalogCommand } = require("@aws-sdk/client-athena"); // CommonJS import
 * const client = new AthenaClient(config);
 * const command = new CreateDataCatalogCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateDataCatalogCommandInput} for command's `input` shape.
 * @see {@link CreateDataCatalogCommandOutput} for command's `response` shape.
 * @see {@link AthenaClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class CreateDataCatalogCommand extends $Command<
  CreateDataCatalogCommandInput,
  CreateDataCatalogCommandOutput,
  AthenaClientResolvedConfig
> {
  readonly input: CreateDataCatalogCommandInput;
  constructor(input: CreateDataCatalogCommandInput);
  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: AthenaClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<CreateDataCatalogCommandInput, CreateDataCatalogCommandOutput>;
  private serialize;
  private deserialize;
}
