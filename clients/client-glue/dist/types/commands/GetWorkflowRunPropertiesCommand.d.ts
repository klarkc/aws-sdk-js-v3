import { GlueClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../GlueClient";
import { GetWorkflowRunPropertiesRequest, GetWorkflowRunPropertiesResponse } from "../models/models_1";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface GetWorkflowRunPropertiesCommandInput extends GetWorkflowRunPropertiesRequest {
}
export interface GetWorkflowRunPropertiesCommandOutput extends GetWorkflowRunPropertiesResponse, __MetadataBearer {
}
/**
 * <p>Retrieves the workflow run properties which were set during the run.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GlueClient, GetWorkflowRunPropertiesCommand } from "@aws-sdk/client-glue"; // ES Modules import
 * // const { GlueClient, GetWorkflowRunPropertiesCommand } = require("@aws-sdk/client-glue"); // CommonJS import
 * const client = new GlueClient(config);
 * const command = new GetWorkflowRunPropertiesCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetWorkflowRunPropertiesCommandInput} for command's `input` shape.
 * @see {@link GetWorkflowRunPropertiesCommandOutput} for command's `response` shape.
 * @see {@link GlueClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class GetWorkflowRunPropertiesCommand extends $Command<GetWorkflowRunPropertiesCommandInput, GetWorkflowRunPropertiesCommandOutput, GlueClientResolvedConfig> {
    readonly input: GetWorkflowRunPropertiesCommandInput;
    constructor(input: GetWorkflowRunPropertiesCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: GlueClientResolvedConfig, options?: __HttpHandlerOptions): Handler<GetWorkflowRunPropertiesCommandInput, GetWorkflowRunPropertiesCommandOutput>;
    private serialize;
    private deserialize;
}
