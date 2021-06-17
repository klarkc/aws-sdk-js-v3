import { RAMClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../RAMClient";
import { ListResourceTypesRequest, ListResourceTypesResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface ListResourceTypesCommandInput extends ListResourceTypesRequest {
}
export interface ListResourceTypesCommandOutput extends ListResourceTypesResponse, __MetadataBearer {
}
/**
 * <p>Lists the shareable resource types supported by AWS RAM.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RAMClient, ListResourceTypesCommand } from "@aws-sdk/client-ram"; // ES Modules import
 * // const { RAMClient, ListResourceTypesCommand } = require("@aws-sdk/client-ram"); // CommonJS import
 * const client = new RAMClient(config);
 * const command = new ListResourceTypesCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListResourceTypesCommandInput} for command's `input` shape.
 * @see {@link ListResourceTypesCommandOutput} for command's `response` shape.
 * @see {@link RAMClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class ListResourceTypesCommand extends $Command<ListResourceTypesCommandInput, ListResourceTypesCommandOutput, RAMClientResolvedConfig> {
    readonly input: ListResourceTypesCommandInput;
    constructor(input: ListResourceTypesCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: RAMClientResolvedConfig, options?: __HttpHandlerOptions): Handler<ListResourceTypesCommandInput, ListResourceTypesCommandOutput>;
    private serialize;
    private deserialize;
}
