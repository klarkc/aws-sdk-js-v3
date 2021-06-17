import { SageMakerClient } from "../SageMakerClient";
import { DescribeNotebookInstanceCommandInput } from "../commands/DescribeNotebookInstanceCommand";
import { WaiterConfiguration, WaiterResult } from "@aws-sdk/util-waiter";
/**
 *
 *  @deprecated Use waitUntilNotebookInstanceStopped instead. waitForNotebookInstanceStopped does not throw error in non-success cases.
 */
export declare const waitForNotebookInstanceStopped: (params: WaiterConfiguration<SageMakerClient>, input: DescribeNotebookInstanceCommandInput) => Promise<WaiterResult>;
/**
 *
 *  @param params - Waiter configuration options.
 *  @param input - The input to DescribeNotebookInstanceCommand for polling.
 */
export declare const waitUntilNotebookInstanceStopped: (params: WaiterConfiguration<SageMakerClient>, input: DescribeNotebookInstanceCommandInput) => Promise<WaiterResult>;
