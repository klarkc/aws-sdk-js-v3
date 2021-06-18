import { __extends } from "tslib";
import { DescribeJobDefinitionsRequest, DescribeJobDefinitionsResponse } from "../models/models_0";
import {
  deserializeAws_restJson1DescribeJobDefinitionsCommand,
  serializeAws_restJson1DescribeJobDefinitionsCommand,
} from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Describes a list of job definitions. You can specify a <code>status</code> (such as <code>ACTIVE</code>) to only
 *    return job definitions that match that status.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { BatchClient, DescribeJobDefinitionsCommand } from "@aws-sdk/client-batch"; // ES Modules import
 * // const { BatchClient, DescribeJobDefinitionsCommand } = require("@aws-sdk/client-batch"); // CommonJS import
 * const client = new BatchClient(config);
 * const command = new DescribeJobDefinitionsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeJobDefinitionsCommandInput} for command's `input` shape.
 * @see {@link DescribeJobDefinitionsCommandOutput} for command's `response` shape.
 * @see {@link BatchClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DescribeJobDefinitionsCommand = /** @class */ (function (_super) {
  __extends(DescribeJobDefinitionsCommand, _super);
  // Start section: command_properties
  // End section: command_properties
  function DescribeJobDefinitionsCommand(input) {
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
  DescribeJobDefinitionsCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    var stack = clientStack.concat(this.middlewareStack);
    var logger = configuration.logger;
    var clientName = "BatchClient";
    var commandName = "DescribeJobDefinitionsCommand";
    var handlerExecutionContext = {
      logger: logger,
      clientName: clientName,
      commandName: commandName,
      inputFilterSensitiveLog: DescribeJobDefinitionsRequest.filterSensitiveLog,
      outputFilterSensitiveLog: DescribeJobDefinitionsResponse.filterSensitiveLog,
    };
    var requestHandler = configuration.requestHandler;
    return stack.resolve(function (request) {
      return requestHandler.handle(request.request, options || {});
    }, handlerExecutionContext);
  };
  DescribeJobDefinitionsCommand.prototype.serialize = function (input, context) {
    return serializeAws_restJson1DescribeJobDefinitionsCommand(input, context);
  };
  DescribeJobDefinitionsCommand.prototype.deserialize = function (output, context) {
    return deserializeAws_restJson1DescribeJobDefinitionsCommand(output, context);
  };
  return DescribeJobDefinitionsCommand;
})($Command);
export { DescribeJobDefinitionsCommand };
//# sourceMappingURL=DescribeJobDefinitionsCommand.js.map
