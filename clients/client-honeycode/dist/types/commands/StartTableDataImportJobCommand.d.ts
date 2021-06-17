import { HoneycodeClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../HoneycodeClient";
import { StartTableDataImportJobRequest, StartTableDataImportJobResult } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface StartTableDataImportJobCommandInput extends StartTableDataImportJobRequest {
}
export interface StartTableDataImportJobCommandOutput extends StartTableDataImportJobResult, __MetadataBearer {
}
/**
 * <p>
 *             The StartTableDataImportJob API allows you to start an import job on a table. This API will only return
 *             the id of the job that was started. To find out the status of the import request, you need to call the
 *             DescribeTableDataImportJob API.
 *         </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { HoneycodeClient, StartTableDataImportJobCommand } from "@aws-sdk/client-honeycode"; // ES Modules import
 * // const { HoneycodeClient, StartTableDataImportJobCommand } = require("@aws-sdk/client-honeycode"); // CommonJS import
 * const client = new HoneycodeClient(config);
 * const command = new StartTableDataImportJobCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link StartTableDataImportJobCommandInput} for command's `input` shape.
 * @see {@link StartTableDataImportJobCommandOutput} for command's `response` shape.
 * @see {@link HoneycodeClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class StartTableDataImportJobCommand extends $Command<StartTableDataImportJobCommandInput, StartTableDataImportJobCommandOutput, HoneycodeClientResolvedConfig> {
    readonly input: StartTableDataImportJobCommandInput;
    constructor(input: StartTableDataImportJobCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: HoneycodeClientResolvedConfig, options?: __HttpHandlerOptions): Handler<StartTableDataImportJobCommandInput, StartTableDataImportJobCommandOutput>;
    private serialize;
    private deserialize;
}
