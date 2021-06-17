import { ConnectClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ConnectClient";
import { ListUseCasesRequest, ListUseCasesResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface ListUseCasesCommandInput extends ListUseCasesRequest {
}
export interface ListUseCasesCommandOutput extends ListUseCasesResponse, __MetadataBearer {
}
/**
 * <p>Lists the use cases. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ConnectClient, ListUseCasesCommand } from "@aws-sdk/client-connect"; // ES Modules import
 * // const { ConnectClient, ListUseCasesCommand } = require("@aws-sdk/client-connect"); // CommonJS import
 * const client = new ConnectClient(config);
 * const command = new ListUseCasesCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListUseCasesCommandInput} for command's `input` shape.
 * @see {@link ListUseCasesCommandOutput} for command's `response` shape.
 * @see {@link ConnectClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class ListUseCasesCommand extends $Command<ListUseCasesCommandInput, ListUseCasesCommandOutput, ConnectClientResolvedConfig> {
    readonly input: ListUseCasesCommandInput;
    constructor(input: ListUseCasesCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: ConnectClientResolvedConfig, options?: __HttpHandlerOptions): Handler<ListUseCasesCommandInput, ListUseCasesCommandOutput>;
    private serialize;
    private deserialize;
}
