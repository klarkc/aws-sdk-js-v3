import { RedshiftDataClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../RedshiftDataClient";
import { GetStatementResultRequest, GetStatementResultResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface GetStatementResultCommandInput extends GetStatementResultRequest {
}
export interface GetStatementResultCommandOutput extends GetStatementResultResponse, __MetadataBearer {
}
/**
 * <p>Fetches the temporarily cached result of an SQL statement.
 *        A token is returned to page through the statement results. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RedshiftDataClient, GetStatementResultCommand } from "@aws-sdk/client-redshift-data"; // ES Modules import
 * // const { RedshiftDataClient, GetStatementResultCommand } = require("@aws-sdk/client-redshift-data"); // CommonJS import
 * const client = new RedshiftDataClient(config);
 * const command = new GetStatementResultCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetStatementResultCommandInput} for command's `input` shape.
 * @see {@link GetStatementResultCommandOutput} for command's `response` shape.
 * @see {@link RedshiftDataClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class GetStatementResultCommand extends $Command<GetStatementResultCommandInput, GetStatementResultCommandOutput, RedshiftDataClientResolvedConfig> {
    readonly input: GetStatementResultCommandInput;
    constructor(input: GetStatementResultCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: RedshiftDataClientResolvedConfig, options?: __HttpHandlerOptions): Handler<GetStatementResultCommandInput, GetStatementResultCommandOutput>;
    private serialize;
    private deserialize;
}
