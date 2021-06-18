import { __extends } from "tslib";
import { DescribeImageBuildersRequest, DescribeImageBuildersResult } from "../models/models_0";
import {
  deserializeAws_json1_1DescribeImageBuildersCommand,
  serializeAws_json1_1DescribeImageBuildersCommand,
} from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Retrieves a list that describes one or more specified image builders, if the image builder names are provided. Otherwise, all image builders in the account are described.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AppStreamClient, DescribeImageBuildersCommand } from "@aws-sdk/client-appstream"; // ES Modules import
 * // const { AppStreamClient, DescribeImageBuildersCommand } = require("@aws-sdk/client-appstream"); // CommonJS import
 * const client = new AppStreamClient(config);
 * const command = new DescribeImageBuildersCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeImageBuildersCommandInput} for command's `input` shape.
 * @see {@link DescribeImageBuildersCommandOutput} for command's `response` shape.
 * @see {@link AppStreamClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DescribeImageBuildersCommand = /** @class */ (function (_super) {
  __extends(DescribeImageBuildersCommand, _super);
  // Start section: command_properties
  // End section: command_properties
  function DescribeImageBuildersCommand(input) {
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
  DescribeImageBuildersCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    var stack = clientStack.concat(this.middlewareStack);
    var logger = configuration.logger;
    var clientName = "AppStreamClient";
    var commandName = "DescribeImageBuildersCommand";
    var handlerExecutionContext = {
      logger: logger,
      clientName: clientName,
      commandName: commandName,
      inputFilterSensitiveLog: DescribeImageBuildersRequest.filterSensitiveLog,
      outputFilterSensitiveLog: DescribeImageBuildersResult.filterSensitiveLog,
    };
    var requestHandler = configuration.requestHandler;
    return stack.resolve(function (request) {
      return requestHandler.handle(request.request, options || {});
    }, handlerExecutionContext);
  };
  DescribeImageBuildersCommand.prototype.serialize = function (input, context) {
    return serializeAws_json1_1DescribeImageBuildersCommand(input, context);
  };
  DescribeImageBuildersCommand.prototype.deserialize = function (output, context) {
    return deserializeAws_json1_1DescribeImageBuildersCommand(output, context);
  };
  return DescribeImageBuildersCommand;
})($Command);
export { DescribeImageBuildersCommand };
//# sourceMappingURL=DescribeImageBuildersCommand.js.map
