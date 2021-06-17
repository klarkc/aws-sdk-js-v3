import { __extends } from "tslib";
import { CreateClusterSubnetGroupMessage, CreateClusterSubnetGroupResult } from "../models/models_0";
import { deserializeAws_queryCreateClusterSubnetGroupCommand, serializeAws_queryCreateClusterSubnetGroupCommand, } from "../protocols/Aws_query";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
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
var CreateClusterSubnetGroupCommand = /** @class */ (function (_super) {
    __extends(CreateClusterSubnetGroupCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function CreateClusterSubnetGroupCommand(input) {
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
    CreateClusterSubnetGroupCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "RedshiftClient";
        var commandName = "CreateClusterSubnetGroupCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: CreateClusterSubnetGroupMessage.filterSensitiveLog,
            outputFilterSensitiveLog: CreateClusterSubnetGroupResult.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    CreateClusterSubnetGroupCommand.prototype.serialize = function (input, context) {
        return serializeAws_queryCreateClusterSubnetGroupCommand(input, context);
    };
    CreateClusterSubnetGroupCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_queryCreateClusterSubnetGroupCommand(output, context);
    };
    return CreateClusterSubnetGroupCommand;
}($Command));
export { CreateClusterSubnetGroupCommand };
//# sourceMappingURL=CreateClusterSubnetGroupCommand.js.map