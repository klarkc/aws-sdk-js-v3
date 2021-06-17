import { __extends } from "tslib";
import { CreateClusterMessage, CreateClusterResult } from "../models/models_0";
import { deserializeAws_queryCreateClusterCommand, serializeAws_queryCreateClusterCommand, } from "../protocols/Aws_query";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Creates a new cluster with the specified parameters.</p>
 *         <p>To create a cluster in Virtual Private Cloud (VPC), you must provide a cluster
 *             subnet group name. The cluster subnet group identifies the subnets of your VPC that
 *             Amazon Redshift uses when creating the cluster.
 * For more information about managing clusters, go to
 * <a href="https://docs.aws.amazon.com/redshift/latest/mgmt/working-with-clusters.html">Amazon Redshift Clusters</a>
 * in the <i>Amazon Redshift Cluster Management Guide</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RedshiftClient, CreateClusterCommand } from "@aws-sdk/client-redshift"; // ES Modules import
 * // const { RedshiftClient, CreateClusterCommand } = require("@aws-sdk/client-redshift"); // CommonJS import
 * const client = new RedshiftClient(config);
 * const command = new CreateClusterCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateClusterCommandInput} for command's `input` shape.
 * @see {@link CreateClusterCommandOutput} for command's `response` shape.
 * @see {@link RedshiftClientResolvedConfig | config} for command's `input` shape.
 *
 */
var CreateClusterCommand = /** @class */ (function (_super) {
    __extends(CreateClusterCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function CreateClusterCommand(input) {
        var _this = 
        // Start section: command_constructor
        _super.call(this) || this;
        _this.input = input;
        return _this;
        // End section: command_constructor
    }
    /**
     * @internal
     */
    CreateClusterCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "RedshiftClient";
        var commandName = "CreateClusterCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: CreateClusterMessage.filterSensitiveLog,
            outputFilterSensitiveLog: CreateClusterResult.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    CreateClusterCommand.prototype.serialize = function (input, context) {
        return serializeAws_queryCreateClusterCommand(input, context);
    };
    CreateClusterCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_queryCreateClusterCommand(output, context);
    };
    return CreateClusterCommand;
}($Command));
export { CreateClusterCommand };
//# sourceMappingURL=CreateClusterCommand.js.map