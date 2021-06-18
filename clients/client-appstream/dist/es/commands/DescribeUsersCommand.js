import { __extends } from "tslib";
import { DescribeUsersRequest, DescribeUsersResult } from "../models/models_0";
import {
  deserializeAws_json1_1DescribeUsersCommand,
  serializeAws_json1_1DescribeUsersCommand,
} from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Retrieves a list that describes one or more specified users in the user pool.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AppStreamClient, DescribeUsersCommand } from "@aws-sdk/client-appstream"; // ES Modules import
 * // const { AppStreamClient, DescribeUsersCommand } = require("@aws-sdk/client-appstream"); // CommonJS import
 * const client = new AppStreamClient(config);
 * const command = new DescribeUsersCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeUsersCommandInput} for command's `input` shape.
 * @see {@link DescribeUsersCommandOutput} for command's `response` shape.
 * @see {@link AppStreamClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DescribeUsersCommand = /** @class */ (function (_super) {
  __extends(DescribeUsersCommand, _super);
  // Start section: command_properties
  // End section: command_properties
  function DescribeUsersCommand(input) {
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
  DescribeUsersCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    var stack = clientStack.concat(this.middlewareStack);
    var logger = configuration.logger;
    var clientName = "AppStreamClient";
    var commandName = "DescribeUsersCommand";
    var handlerExecutionContext = {
      logger: logger,
      clientName: clientName,
      commandName: commandName,
      inputFilterSensitiveLog: DescribeUsersRequest.filterSensitiveLog,
      outputFilterSensitiveLog: DescribeUsersResult.filterSensitiveLog,
    };
    var requestHandler = configuration.requestHandler;
    return stack.resolve(function (request) {
      return requestHandler.handle(request.request, options || {});
    }, handlerExecutionContext);
  };
  DescribeUsersCommand.prototype.serialize = function (input, context) {
    return serializeAws_json1_1DescribeUsersCommand(input, context);
  };
  DescribeUsersCommand.prototype.deserialize = function (output, context) {
    return deserializeAws_json1_1DescribeUsersCommand(output, context);
  };
  return DescribeUsersCommand;
})($Command);
export { DescribeUsersCommand };
//# sourceMappingURL=DescribeUsersCommand.js.map
