import { __extends } from "tslib";
import { CreateClusterParameterGroupMessage, CreateClusterParameterGroupResult } from "../models/models_0";
import { deserializeAws_queryCreateClusterParameterGroupCommand, serializeAws_queryCreateClusterParameterGroupCommand, } from "../protocols/Aws_query";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Creates an Amazon Redshift parameter group.</p>
 *         <p>Creating parameter groups is independent of creating clusters. You can associate a
 *             cluster with a parameter group when you create the cluster. You can also associate an
 *             existing cluster with a parameter group after the cluster is created by using <a>ModifyCluster</a>. </p>
 *         <p>Parameters in the parameter group define specific behavior that applies to the
 *             databases you create on the cluster.
 * For more information about parameters and parameter groups, go to
 * <a href="https://docs.aws.amazon.com/redshift/latest/mgmt/working-with-parameter-groups.html">Amazon Redshift Parameter Groups</a>
 * in the <i>Amazon Redshift Cluster Management Guide</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RedshiftClient, CreateClusterParameterGroupCommand } from "@aws-sdk/client-redshift"; // ES Modules import
 * // const { RedshiftClient, CreateClusterParameterGroupCommand } = require("@aws-sdk/client-redshift"); // CommonJS import
 * const client = new RedshiftClient(config);
 * const command = new CreateClusterParameterGroupCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateClusterParameterGroupCommandInput} for command's `input` shape.
 * @see {@link CreateClusterParameterGroupCommandOutput} for command's `response` shape.
 * @see {@link RedshiftClientResolvedConfig | config} for command's `input` shape.
 *
 */
var CreateClusterParameterGroupCommand = /** @class */ (function (_super) {
    __extends(CreateClusterParameterGroupCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function CreateClusterParameterGroupCommand(input) {
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
    CreateClusterParameterGroupCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "RedshiftClient";
        var commandName = "CreateClusterParameterGroupCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: CreateClusterParameterGroupMessage.filterSensitiveLog,
            outputFilterSensitiveLog: CreateClusterParameterGroupResult.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    CreateClusterParameterGroupCommand.prototype.serialize = function (input, context) {
        return serializeAws_queryCreateClusterParameterGroupCommand(input, context);
    };
    CreateClusterParameterGroupCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_queryCreateClusterParameterGroupCommand(output, context);
    };
    return CreateClusterParameterGroupCommand;
}($Command));
export { CreateClusterParameterGroupCommand };
//# sourceMappingURL=CreateClusterParameterGroupCommand.js.map