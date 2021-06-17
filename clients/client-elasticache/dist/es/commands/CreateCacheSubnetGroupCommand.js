import { __extends } from "tslib";
import { CreateCacheSubnetGroupMessage, CreateCacheSubnetGroupResult } from "../models/models_0";
import { deserializeAws_queryCreateCacheSubnetGroupCommand, serializeAws_queryCreateCacheSubnetGroupCommand, } from "../protocols/Aws_query";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Creates a new cache subnet group.</p>
 *         <p>Use this parameter only when you are creating a cluster in an Amazon Virtual Private Cloud (Amazon VPC).</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ElastiCacheClient, CreateCacheSubnetGroupCommand } from "@aws-sdk/client-elasticache"; // ES Modules import
 * // const { ElastiCacheClient, CreateCacheSubnetGroupCommand } = require("@aws-sdk/client-elasticache"); // CommonJS import
 * const client = new ElastiCacheClient(config);
 * const command = new CreateCacheSubnetGroupCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateCacheSubnetGroupCommandInput} for command's `input` shape.
 * @see {@link CreateCacheSubnetGroupCommandOutput} for command's `response` shape.
 * @see {@link ElastiCacheClientResolvedConfig | config} for command's `input` shape.
 *
 */
var CreateCacheSubnetGroupCommand = /** @class */ (function (_super) {
    __extends(CreateCacheSubnetGroupCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function CreateCacheSubnetGroupCommand(input) {
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
    CreateCacheSubnetGroupCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "ElastiCacheClient";
        var commandName = "CreateCacheSubnetGroupCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: CreateCacheSubnetGroupMessage.filterSensitiveLog,
            outputFilterSensitiveLog: CreateCacheSubnetGroupResult.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    CreateCacheSubnetGroupCommand.prototype.serialize = function (input, context) {
        return serializeAws_queryCreateCacheSubnetGroupCommand(input, context);
    };
    CreateCacheSubnetGroupCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_queryCreateCacheSubnetGroupCommand(output, context);
    };
    return CreateCacheSubnetGroupCommand;
}($Command));
export { CreateCacheSubnetGroupCommand };
//# sourceMappingURL=CreateCacheSubnetGroupCommand.js.map