import { __extends } from "tslib";
import { CreateCacheParameterGroupMessage, CreateCacheParameterGroupResult } from "../models/models_0";
import { deserializeAws_queryCreateCacheParameterGroupCommand, serializeAws_queryCreateCacheParameterGroupCommand, } from "../protocols/Aws_query";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Creates a new Amazon ElastiCache cache parameter group. An ElastiCache
 *             cache parameter group is a collection of parameters and their values that are applied to all of the nodes
 *             in any cluster or replication group using the CacheParameterGroup.</p>
 *         <p>A newly created CacheParameterGroup is an exact duplicate of the default parameter group
 *             for the CacheParameterGroupFamily. To customize the newly created CacheParameterGroup you can
 *             change the values of specific parameters. For more information, see:</p>
 *         <ul>
 *             <li>
 *                 <p>
 *                   <a href="https://docs.aws.amazon.com/AmazonElastiCache/latest/APIReference/API_ModifyCacheParameterGroup.html">ModifyCacheParameterGroup</a> in the ElastiCache API Reference.</p>
 *             </li>
 *             <li>
 *                 <p>
 *                   <a href="https://docs.aws.amazon.com/AmazonElastiCache/latest/red-ug/ParameterGroups.html">Parameters and Parameter Groups</a> in the ElastiCache User Guide.</p>
 *             </li>
 *          </ul>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ElastiCacheClient, CreateCacheParameterGroupCommand } from "@aws-sdk/client-elasticache"; // ES Modules import
 * // const { ElastiCacheClient, CreateCacheParameterGroupCommand } = require("@aws-sdk/client-elasticache"); // CommonJS import
 * const client = new ElastiCacheClient(config);
 * const command = new CreateCacheParameterGroupCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateCacheParameterGroupCommandInput} for command's `input` shape.
 * @see {@link CreateCacheParameterGroupCommandOutput} for command's `response` shape.
 * @see {@link ElastiCacheClientResolvedConfig | config} for command's `input` shape.
 *
 */
var CreateCacheParameterGroupCommand = /** @class */ (function (_super) {
    __extends(CreateCacheParameterGroupCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function CreateCacheParameterGroupCommand(input) {
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
    CreateCacheParameterGroupCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "ElastiCacheClient";
        var commandName = "CreateCacheParameterGroupCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: CreateCacheParameterGroupMessage.filterSensitiveLog,
            outputFilterSensitiveLog: CreateCacheParameterGroupResult.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    CreateCacheParameterGroupCommand.prototype.serialize = function (input, context) {
        return serializeAws_queryCreateCacheParameterGroupCommand(input, context);
    };
    CreateCacheParameterGroupCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_queryCreateCacheParameterGroupCommand(output, context);
    };
    return CreateCacheParameterGroupCommand;
}($Command));
export { CreateCacheParameterGroupCommand };
//# sourceMappingURL=CreateCacheParameterGroupCommand.js.map