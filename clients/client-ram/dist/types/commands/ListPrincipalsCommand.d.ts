import { RAMClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../RAMClient";
import { ListPrincipalsRequest, ListPrincipalsResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface ListPrincipalsCommandInput extends ListPrincipalsRequest {
}
export interface ListPrincipalsCommandOutput extends ListPrincipalsResponse, __MetadataBearer {
}
/**
 * <p>Lists the principals that you have shared resources with or that have shared resources
 * 			with you.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RAMClient, ListPrincipalsCommand } from "@aws-sdk/client-ram"; // ES Modules import
 * // const { RAMClient, ListPrincipalsCommand } = require("@aws-sdk/client-ram"); // CommonJS import
 * const client = new RAMClient(config);
 * const command = new ListPrincipalsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListPrincipalsCommandInput} for command's `input` shape.
 * @see {@link ListPrincipalsCommandOutput} for command's `response` shape.
 * @see {@link RAMClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class ListPrincipalsCommand extends $Command<ListPrincipalsCommandInput, ListPrincipalsCommandOutput, RAMClientResolvedConfig> {
    readonly input: ListPrincipalsCommandInput;
    constructor(input: ListPrincipalsCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: RAMClientResolvedConfig, options?: __HttpHandlerOptions): Handler<ListPrincipalsCommandInput, ListPrincipalsCommandOutput>;
    private serialize;
    private deserialize;
}
