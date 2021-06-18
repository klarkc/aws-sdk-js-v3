import { __extends } from "tslib";
import { DescribeStacksRequest, DescribeStacksResult } from "../models/models_0";
import {
  deserializeAws_json1_1DescribeStacksCommand,
  serializeAws_json1_1DescribeStacksCommand,
} from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Retrieves a list that describes one or more specified stacks, if the stack names are provided. Otherwise, all stacks in the account are described.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AppStreamClient, DescribeStacksCommand } from "@aws-sdk/client-appstream"; // ES Modules import
 * // const { AppStreamClient, DescribeStacksCommand } = require("@aws-sdk/client-appstream"); // CommonJS import
 * const client = new AppStreamClient(config);
 * const command = new DescribeStacksCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeStacksCommandInput} for command's `input` shape.
 * @see {@link DescribeStacksCommandOutput} for command's `response` shape.
 * @see {@link AppStreamClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DescribeStacksCommand = /** @class */ (function (_super) {
  __extends(DescribeStacksCommand, _super);
  // Start section: command_properties
  // End section: command_properties
  function DescribeStacksCommand(input) {
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
  DescribeStacksCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    var stack = clientStack.concat(this.middlewareStack);
    var logger = configuration.logger;
    var clientName = "AppStreamClient";
    var commandName = "DescribeStacksCommand";
    var handlerExecutionContext = {
      logger: logger,
      clientName: clientName,
      commandName: commandName,
      inputFilterSensitiveLog: DescribeStacksRequest.filterSensitiveLog,
      outputFilterSensitiveLog: DescribeStacksResult.filterSensitiveLog,
    };
    var requestHandler = configuration.requestHandler;
    return stack.resolve(function (request) {
      return requestHandler.handle(request.request, options || {});
    }, handlerExecutionContext);
  };
  DescribeStacksCommand.prototype.serialize = function (input, context) {
    return serializeAws_json1_1DescribeStacksCommand(input, context);
  };
  DescribeStacksCommand.prototype.deserialize = function (output, context) {
    return deserializeAws_json1_1DescribeStacksCommand(output, context);
  };
  return DescribeStacksCommand;
})($Command);
export { DescribeStacksCommand };
//# sourceMappingURL=DescribeStacksCommand.js.map
