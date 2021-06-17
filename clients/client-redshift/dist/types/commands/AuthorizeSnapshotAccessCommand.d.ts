import { RedshiftClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../RedshiftClient";
import { AuthorizeSnapshotAccessMessage, AuthorizeSnapshotAccessResult } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface AuthorizeSnapshotAccessCommandInput extends AuthorizeSnapshotAccessMessage {
}
export interface AuthorizeSnapshotAccessCommandOutput extends AuthorizeSnapshotAccessResult, __MetadataBearer {
}
/**
 * <p>Authorizes the specified AWS customer account to restore the specified
 *             snapshot.</p>
 *         <p>
 * For more information about working with snapshots, go to
 * <a href="https://docs.aws.amazon.com/redshift/latest/mgmt/working-with-snapshots.html">Amazon Redshift Snapshots</a>
 * in the <i>Amazon Redshift Cluster Management Guide</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RedshiftClient, AuthorizeSnapshotAccessCommand } from "@aws-sdk/client-redshift"; // ES Modules import
 * // const { RedshiftClient, AuthorizeSnapshotAccessCommand } = require("@aws-sdk/client-redshift"); // CommonJS import
 * const client = new RedshiftClient(config);
 * const command = new AuthorizeSnapshotAccessCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link AuthorizeSnapshotAccessCommandInput} for command's `input` shape.
 * @see {@link AuthorizeSnapshotAccessCommandOutput} for command's `response` shape.
 * @see {@link RedshiftClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class AuthorizeSnapshotAccessCommand extends $Command<AuthorizeSnapshotAccessCommandInput, AuthorizeSnapshotAccessCommandOutput, RedshiftClientResolvedConfig> {
    readonly input: AuthorizeSnapshotAccessCommandInput;
    constructor(input: AuthorizeSnapshotAccessCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: RedshiftClientResolvedConfig, options?: __HttpHandlerOptions): Handler<AuthorizeSnapshotAccessCommandInput, AuthorizeSnapshotAccessCommandOutput>;
    private serialize;
    private deserialize;
}
