/// !cdk-integ pragma:ignore-assets pragma:disable-update-workflow
import { App, Stack } from '@aws-cdk/core';
import * as eks from '../lib';

const CLUSTER_VERSION = eks.KubernetesVersion.of('1.22');


class EksFargateClusterStack extends Stack {

  constructor(scope: App, id: string) {
    super(scope, id);

    new eks.FargateCluster(this, 'FargateCluster', {
      version: CLUSTER_VERSION,
      prune: false,
    });
  }
}

const app = new App();

new EksFargateClusterStack(app, 'aws-cdk-eks-fargate-cluster-test');

app.synth();
