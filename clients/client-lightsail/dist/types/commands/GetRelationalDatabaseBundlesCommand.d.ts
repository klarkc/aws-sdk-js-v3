import { LightsailClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../LightsailClient";
import { GetRelationalDatabaseBundlesRequest, GetRelationalDatabaseBundlesResult } from "../models/models_1";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface GetRelationalDatabaseBundlesCommandInput extends GetRelationalDatabaseBundlesRequest {
}
export interface GetRelationalDatabaseBundlesCommandOutput extends GetRelationalDatabaseBundlesResult, __MetadataBearer {
}
/**
 * <p>Returns the list of bundles that are available in Amazon Lightsail. A bundle describes the
 *       performance specifications for a database.</p>
 *          <p>You can use a bundle ID to create a new database with explicit performance
 *       specifications.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LightsailClient, GetRelationalDatabaseBundlesCommand } from "@aws-sdk/client-lightsail"; // ES Modules import
 * // const { LightsailClient, GetRelationalDatabaseBundlesCommand } = require("@aws-sdk/client-lightsail"); // CommonJS import
 * const client = new LightsailClient(config);
 * const command = new GetRelationalDatabaseBundlesCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetRelationalDatabaseBundlesCommandInput} for command's `input` shape.
 * @see {@link GetRelationalDatabaseBundlesCommandOutput} for command's `response` shape.
 * @see {@link LightsailClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class GetRelationalDatabaseBundlesCommand extends $Command<GetRelationalDatabaseBundlesCommandInput, GetRelationalDatabaseBundlesCommandOutput, LightsailClientResolvedConfig> {
    readonly input: GetRelationalDatabaseBundlesCommandInput;
    constructor(input: GetRelationalDatabaseBundlesCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: LightsailClientResolvedConfig, options?: __HttpHandlerOptions): Handler<GetRelationalDatabaseBundlesCommandInput, GetRelationalDatabaseBundlesCommandOutput>;
    private serialize;
    private deserialize;
}
