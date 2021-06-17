import { FisClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../FisClient";
import { ListExperimentTemplatesRequest, ListExperimentTemplatesResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface ListExperimentTemplatesCommandInput extends ListExperimentTemplatesRequest {
}
export interface ListExperimentTemplatesCommandOutput extends ListExperimentTemplatesResponse, __MetadataBearer {
}
/**
 * <p>Lists your experiment templates.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { FisClient, ListExperimentTemplatesCommand } from "@aws-sdk/client-fis"; // ES Modules import
 * // const { FisClient, ListExperimentTemplatesCommand } = require("@aws-sdk/client-fis"); // CommonJS import
 * const client = new FisClient(config);
 * const command = new ListExperimentTemplatesCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListExperimentTemplatesCommandInput} for command's `input` shape.
 * @see {@link ListExperimentTemplatesCommandOutput} for command's `response` shape.
 * @see {@link FisClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class ListExperimentTemplatesCommand extends $Command<ListExperimentTemplatesCommandInput, ListExperimentTemplatesCommandOutput, FisClientResolvedConfig> {
    readonly input: ListExperimentTemplatesCommandInput;
    constructor(input: ListExperimentTemplatesCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: FisClientResolvedConfig, options?: __HttpHandlerOptions): Handler<ListExperimentTemplatesCommandInput, ListExperimentTemplatesCommandOutput>;
    private serialize;
    private deserialize;
}
