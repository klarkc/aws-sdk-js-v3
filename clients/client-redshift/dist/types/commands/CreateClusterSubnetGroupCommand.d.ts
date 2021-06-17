import { RedshiftClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../RedshiftClient";
import { CreateClusterSubnetGroupMessage, CreateClusterSubnetGroupResult } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface CreateClusterSubnetGroupCommandInput extends CreateClusterSubnetGroupMessage {
}
export interface CreateClusterSubnetGroupCommandOutput extends CreateClusterSubnetGroupResult, __MetadataBearer {
}
/**
 * <p>Creates a new Amazon Redshift subnet group. You must provide a list of one or more
 *             subnets in your existing Amazon Virtual Private Cloud (Amazon VPC) when creating
 *             Amazon Redshift subnet group.</p>
 *         <p>
 * For information about subnet groups, go to
 * <a href="https://docs.aws.amazon.com/redshift/latest/mgmt/working-with-cluster-subnet-groups.html">Amazon Redshift Cluster Subnet Groups</a> in the
 * <i>Amazon Redshift Cluster Management Guide</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RedshiftClient, CreateClusterSubnetGroupCommand } from "@aws-sdk/client-redshift"; // ES Modules import
 * // const { RedshiftClient, CreateClusterSubnetGroupCommand } = require("@aws-sdk/client-redshift"); // CommonJS import
 * const client = new RedshiftClient(config);
 * const command = new CreateClusterSubnetGroupCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateClusterSubnetGroupCommandInput} for command's `input` shape.
 * @see {@link CreateClusterSubnetGroupCommandOutput} for command's `response` shape.
 * @see {@link RedshiftClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class CreateClusterSubnetGroupCommand extends $Command<CreateClusterSubnetGroupCommandInput, CreateClusterSubnetGroupCommandOutput, RedshiftClientResolvedConfig> {
    readonly input: CreateClusterSubnetGroupCommandInput;
    constructor(input: CreateClusterSubnetGroupCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: RedshiftClientResolvedConfig, options?: __HttpHandlerOptions): Handler<CreateClusterSubnetGroupCommandInput, CreateClusterSubnetGroupCommandOutput>;
    private serialize;
    private deserialize;
}
