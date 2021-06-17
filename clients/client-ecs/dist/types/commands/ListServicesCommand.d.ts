import { ECSClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ECSClient";
import { ListServicesRequest, ListServicesResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface ListServicesCommandInput extends ListServicesRequest {
}
export interface ListServicesCommandOutput extends ListServicesResponse, __MetadataBearer {
}
/**
 * <p>Returns a list of services. You can filter the results by cluster, launch type, and
 * 			scheduling strategy.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ECSClient, ListServicesCommand } from "@aws-sdk/client-ecs"; // ES Modules import
 * // const { ECSClient, ListServicesCommand } = require("@aws-sdk/client-ecs"); // CommonJS import
 * const client = new ECSClient(config);
 * const command = new ListServicesCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListServicesCommandInput} for command's `input` shape.
 * @see {@link ListServicesCommandOutput} for command's `response` shape.
 * @see {@link ECSClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class ListServicesCommand extends $Command<ListServicesCommandInput, ListServicesCommandOutput, ECSClientResolvedConfig> {
    readonly input: ListServicesCommandInput;
    constructor(input: ListServicesCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: ECSClientResolvedConfig, options?: __HttpHandlerOptions): Handler<ListServicesCommandInput, ListServicesCommandOutput>;
    private serialize;
    private deserialize;
}
